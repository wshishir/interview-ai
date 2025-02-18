"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const NewInterview = () => {
  const [open, setOpen] = useState(false);
  const [jobPosition, setJobPosition] = useState<string>("");
  const [jobDesc, setJobDesc] = useState<string>("");
  const [jobExperience, setJobExperience] = useState<number>(0);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-lg">
            New Interview
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Tell me more about your job </DialogTitle>
            <DialogDescription>
              Add details about the job position, job description and your years
              of experience
            </DialogDescription>
          </DialogHeader>
          <div className="gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Job Position
              </Label>
              <Input id="name" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Job Description
              </Label>
              <Textarea id="username" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Years of Experience
              </Label>
              <Input id="username" className="col-span-3" max={20} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-black hover:bg-black/80">
              Start Interview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewInterview;
