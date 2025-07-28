import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      guestCount: "",
      eventDate: "",
      location: "",
      message: ""
    }
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your inquiry! We will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-purple-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to elevate your event? Contact us today for a personalized quote and consultation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
              Request a Quote
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
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
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Event Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="private">Private Party</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Guest Count</FormLabel>
                        <FormControl>
                          <Input placeholder="Approximate number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State" {...field} />
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
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your event..." 
                          className="resize-none"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-gradient hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  disabled={submitInquiry.isPending}
                >
                  {submitInquiry.isPending ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Info */}
          <div className="text-white">
            <h3 className="font-display text-3xl font-semibold mb-8">
              Let's Start Planning Your Perfect Event
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:760-718-9157" className="text-white/90 hover:text-white transition-colors duration-200 text-lg">
                    (760) 718-9157
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>
                  <a href="https://www.instagram.com/mobile_bar_jess" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors duration-200 text-lg">
                    @mobile_bar_jess
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Service Areas</h4>
                  <p className="text-white/90 text-lg">
                    Los Angeles<br />
                    Orange County<br />
                    Inland Empire
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Response Time</h4>
                  <p className="text-white/90 text-lg">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-display text-xl font-semibold mb-3">
                Follow Us for Updates
              </h4>
              <p className="text-white/90 mb-4">
                Stay updated with our latest events, cocktail creations, and special offers.
              </p>
              <a href="https://www.instagram.com/mobile_bar_jess" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-purple-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
                <Instagram className="mr-2" size={20} />
                Follow Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
