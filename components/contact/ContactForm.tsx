import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form className="space-y-4 w-full lg:w-1/2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fname" className="text-white text-lg">First Name</Label>
          <Input id="fname" placeholder="John" className="text-lg h-10 mt-1" required />
        </div>
        <div>
          <Label htmlFor="lname" className="text-white text-lg">Last Name</Label>
          <Input id="lname" placeholder="Smith" className="text-lg h-10 mt-1" required />
        </div>
      </div>

      <div>
        <Label htmlFor="company-name" className="text-white text-lg">Company</Label>
        <Input id="company-name" placeholder="Example Ltd." className="text-lg h-10 mt-1" required />
      </div>

      <div>
        <Label htmlFor="phone" className="text-white text-lg">Phone</Label>
        <Input
          id="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          placeholder="123-456-789"
          className="text-lg h-10 mt-1"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-white text-lg">Email</Label>
        <Input id="email" type="email" className="text-lg h-10 mt-1" required />
      </div>

      <div className="mt-4">
        <p className="text-white text-lg font-medium">What are you interested in?</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {["Notary", "Apostille Services", "Fingerprinting", "Courier Services", "Misc."].map((service) => (
            <label key={service} className="flex items-center space-x-2 text-white text-base">
              <input type="radio" name="services" value={service.toLowerCase()} />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="file" className="text-white text-lg">Upload your document</Label>
        <Input id="file" type="file" className="text-white file:text-black" />
      </div>

      <div>
        <Label htmlFor="message" className="text-white text-lg">Message</Label>
        <Textarea id="message" rows={4} className="text-lg mt-1" required />
      </div>

      <Button type="submit" className="rounded-full px-10 py-3 mt-4 text-base bg-white text-green-800 hover:bg-gray-100 shadow">
        Submit
      </Button>
    </form>
  );
}
