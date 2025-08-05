// /app/api/reviews/[id]/route.js

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust path to your Prisma client

export async function PATCH(req, { params }) {
  const { id } = await params;
  const { approved } = await req.json();

  try {
    const updatedReview = await prisma.review.update({
      where: { id },
      data: { approved },
    });

    return NextResponse.json({ success: true, review: updatedReview });
  } catch (error) {
    console.error('Failed to update review approval status:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
