"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import Image from "next/image"
// Schema validation
const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
})

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })

  // Form submit handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data)
  }

  return (
    <div className="h-full bg-[#000000] text-white flex justify-center">
      <div className="flex flex-col md:flex-row p-10 gap-5 pt-24 max-w-6xl w-full">

        {/* Scrollable (left) Section */}
        <div className="flex flex-col p-4 w-full md:w-1/2 m-auto space-y-5 rounded-lg shadow-lg ">
          <h3 className="text-white/30 font-bold">Contact us</h3>
          <h1 className="font-bold text-3xl">Get In Touch</h1>
          <p className="text-sm text-white/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia maiores ut deleniti a ex quo! Fuga sequi, neque saepe delectus corrupti, tenetur explicabo dicta animi sit non consequatur facilis.</p>
          <div className="flex flex-col text-sm space-y-2">
              <Link href='/' className="flex flex-row gap-3">
                <Image src='/mail.png' width={22} height={22} alt="hi"/>
                <p>parmdia.shoeibazde4@gmail.com</p>
              </Link>
              <Link href='/' className="flex flex-row gap-3">
                <Image src='/phone.png' width={22} height={22} alt="hi"/>
                <p>+905071949962</p>
              </Link>
          </div>
        </div>

        {/* Fixed (right) Section - Form */}
        <div className="flex p-6 w-full md:w-1/2 ] rounded-lg shadow-lg
                        md:sticky md:top-24 h-auto border border-white/15">
          <div className="w-full">
            <h2 className="text-xl font-semibold text-center text-gray-200 mb-6">
              Contact Us
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">

                {/* Username Input */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Username</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="Enter your username"
                          className="bg-black border border-white/15 text-white p-3 rounded-lg w-full outline-none transition"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Input */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Email</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="border-white/15 border bg-black text-white p-3 rounded-lg w-full outline-none transition"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Input */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Message</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder="Write your message..."
                          className="bg-black border border-white/15 text-white p-3 rounded-lg w-full h-24 resize-none
                                     focus:border-[#00c9a7] focus:ring-2 focus:ring-[#00c9a7] outline-none transition"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full p-3 bg-[#26bdee] text-black font-semibold rounded-lg
                             hover:bg-[#1ca3d0] transition"
                >
                  Submit 🚀
                </Button>
              </form>
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
