"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormValidation, {
  TContactFormValidator,
} from "@/lib/validators/contact-validator";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (values: TContactFormValidator) => {
    const templateFields = {
      from_name: `${values.firstName} ${values.lastName}`,
      subject: values.subject,
      message: values.description,
    };

    emailjs
      .send("service_nvm5lvf", "template_mgdrbqp", templateFields, {
        publicKey: "jzoAK0NqGS60br8eN",
      })
      .then(() => {
        toast("Email submitted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        console.log(err);
      });
  };

  return (
    <section className="px-8 py-8 lg:py-16 h-full w-full">
      <div className="container mx-auto h-full w-full flex flex-col items-center">
        <h1
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl font-extrabold"
        >
          Contact Us
        </h1>
        <h1 className="font-normal !text-lg mx-auto max-w-3xl !text-gray-500 text-center p-5">
          Want to know about something or facing problems?? No worries our team
          and admins always gonna help you.
        </h1>
        <Form {...form}>
          <form
            className="flex flex-col w-[600px] gap-y-[10px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="focus:border-t-gray-900 border-black placeholder:text-[#403938] placeholder:opacity-65"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="focus:border-t-gray-900 border-black placeholder:text-[#403938] placeholder:opacity-65"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="focus:border-t-gray-900 border-black placeholder:text-[#403938] placeholder:opacity-65"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="focus:border-t-gray-900 border-black placeholder:text-[#403938] placeholder:opacity-65"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>

                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="focus:border-t-gray-900 border-black placeholder:text-[#403938] placeholder:opacity-65"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full block" type="submit">
              Send message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default ContactForm;
