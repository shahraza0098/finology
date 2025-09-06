"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/UI/form";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  title: z.string().min(2, "Title is required"),
  bio: z.string().optional(),
});

export default function AddNewStaffForm({businessId}) {
  const router = useRouter();


  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      title: "",
      bio: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `/api/admin/business/${businessId}/complete-registration/add-staffs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add staff");
      }

      router.push(`/complete-registration/financials?businessId=${businessId}`);
    } catch (err) {
      console.error(err);
      alert("Error adding staff");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="bio"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Optional short bio" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save & Continue</Button>
      </form>
    </Form>
  );
}
