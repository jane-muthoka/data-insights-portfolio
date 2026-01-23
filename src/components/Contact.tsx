import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in working together? Whether you need help with a data project, 
              want to discuss opportunities, or just want to connect—I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">janemuthoka5@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
