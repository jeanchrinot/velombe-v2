"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import handleForm from "@/lib/handleForm"
import { toast } from "sonner"
import { RainbowButton } from "@/components/magicui/rainbow-button"

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please, enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 10 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessing(true)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    const res = await handleForm({
      fromEmail: values.email,
      fromName: values.fullname,
      subject: values.subject,
      message: values.message,
    })
    if (res.success) {
      toast.success(res.success, {
        className: "bg-green-100",
      })
      form.reset()
    } else {
      toast.error(res.error)
    }
    setIsProcessing(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        ref={formRef}
      >
        <div className="flex flex-col lg:flex-row gap-2 z-5">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="bg-muted dark:bg-muted z-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="youremail@domain.com"
                    {...field}
                    className="bg-muted dark:bg-muted z-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject"
                  {...field}
                  className="bg-muted dark:bg-muted z-40"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  {...field}
                  className="bg-muted dark:bg-muted z-40 min-h-30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <RainbowButton
          type="submit"
          className="w-full px-4 py-1 h-9 rounded-md text-sm font-normal"
        >
          {isProcessing ? "Submitting..." : "Submit Request"}
        </RainbowButton>
        {/* <Button
          type="submit"
          className="bg-blue-600 text-white w-full hover:bg-blue-700 dark:hover:bg-blue-700 cursor-pointer"
        >
          {isProcessing ? "Submitting..." : "Submit Request"}
        </Button> */}
      </form>
    </Form>
  )
}
