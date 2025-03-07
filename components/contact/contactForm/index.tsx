"use client";
import { ContactFormSchema } from "@/lib/validations";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="w-[500px] max-sm:w-[100%] mx-auto border-1 border-gray-300 p-8 rounded-lg bg-gradient-to-bl from-[#4c9474]/30 to-black/50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="Your name..." />
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...field} placeholder="Your email..." />
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    className="h-[200px]"
                    {...field}
                    placeholder="Your message..."
                  />
                  <FormMessage>
                    {form.formState.errors.message?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              className="py-6 cursor-pointer shadow-[#60d4a4] shadow-[0_0_15px_0] bg-transparent hover:bg-[#60d4a4] border-1 border-[#60d4a4] text-[#60d4a4] hover:text-white transition-all ease-in-out duration-300"
              type="submit"
            >
              Send message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
