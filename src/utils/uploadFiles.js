import { createClient } from '@supabase/supabase-js'
import { Upload } from 'tus-js-client'

const supabaseUrl = 'NEXT_PUBLIC_SUPABASE_URL'
const supabaseKey = 'NEXT_PUBLIC_SUPABASE_ANON_KEY'
const projectId = 'iethhxbydmysbcunrbyr'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function uploadFile(bucketName, fileName, file) {
  const { data: { session } } = await supabase.auth.getSession()

  return new Promise((resolve, reject) => {
    const upload = new Upload(file, {
      endpoint: `https://${projectId}.storage.supabase.co/storage/v1/upload/resumable`,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      headers: {
        authorization: `Bearer ${session?.access_token}`,
        'x-upsert': 'true',
      },
      uploadDataDuringCreation: true,
      removeFingerprintOnSuccess: true,
      metadata: {
        bucketName: bucketName,
        objectName: fileName,
        contentType: file.type,
        cacheControl: 3600,
      },
      chunkSize: 6 * 1024 * 1024,
      onError: (error) => {
        console.error('Upload failed:', error)
        reject(error)
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
        console.log(`Progress: ${percentage}%`)
      },
      onSuccess: () => {
        console.log('Uploaded:', upload.url)
        resolve(upload.url)
      },
    })

    upload.findPreviousUploads().then((previousUploads) => {
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0])
      }
      upload.start()
    })
  })
}
