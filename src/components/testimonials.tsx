import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content:
      "Job well done! I am really impressed. He is very very good at what he does: I highly recommend Sagar for any ambitious project, and actually I am looking forward to working with him again in the future for my next projects.",
    name: "John Doe",
    title: "Founder - XYZ.com",
  },
  {
    id: 2,
    content:
      "Great guy, highly recommended for any COMPLEX front-end projects! Sagar has a great eye for detail and a strong technical background. He will be an amazing addition to any team.",
    name: "John Doe",
    title: "Founder - XYZ.com",
  },
  {
    id: 3,
    content:
      "Sagar was extremely easy and pleasant to work with and he is highly skilled in his craft. He has a high level of knowledge and was able to work on my project efficiently and effectively with very little guidance from me.",
    name: "John Doe",
    title: "Founder - XYZ.com",
  },
]

export default function Testimonials() {
  return (
    <section className="container px-4 py-8 md:py-16 mx-auto" id="testimonials">
      <div className="flex justify-center mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">Testimonials</div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nice things people have said about me:</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border shadow-sm">
            <CardContent className="p-6">
              <p className="mb-6 text-sm">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

