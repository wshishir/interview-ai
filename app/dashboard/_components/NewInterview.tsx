"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
      <div
        className="p-10 border rounded-xl hover:scale-105 hover:shadow-md cursor-pointer bg-secondary transition-all"
        onClick={() => setOpen(true)}
      >
        <h2 className="font-bold text-lg">+ Add New</h2>
      </div>
      <Dialog open={open}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Tell us more about your Job Interview</DialogTitle>
            <DialogDescription asChild>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add details about the job position</h2>
                  <div className="mt-7 my-3">
                    <label>Job Position</label>
                    <Input
                      placeholder="Frontend Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description</label>
                    <Textarea
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="5"
                      type="number"
                      max={10}
                      min={0}
                      required
                      onChange={(event) =>
                        setJobExperience(Number(event.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Start Interview</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewInterview;
