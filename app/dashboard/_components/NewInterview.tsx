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
          <form onSubmit={onSubmit}>
            <div className="mt-2 my-3">
              <label>Job Position</label>
              <Input
                placeholder="e.g Frontend Developer"
                required
                onChange={(event) => setJobPosition(event.target.value)}
              />
            </div>
            <div className="my-3">
              <label>Job Description</label>
              <Textarea onChange={(event) => setJobDesc(event.target.value)} />
            </div>
            <div className="my-3">
              <label>Years of Experience</label>
              <Input
                placeholder="5"
                type="number"
                max={20}
                min={0}
                required
                onChange={(event) =>
                  setJobExperience(Number(event.target.value))
                }
              />
            </div>
          </form>
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
