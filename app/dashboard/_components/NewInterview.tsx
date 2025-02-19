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
import { LoaderCircle } from "lucide-react";
const NewInterview = () => {
  const [open, setOpen] = useState(false);
  const [jobPosition, setJobPosition] = useState<string>("");
  const [jobDesc, setJobDesc] = useState<string>("");
  const [jobExperience, setJobExperience] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const onSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      "Job Position : " +
      jobPosition +
      " , Job Description: " +
      jobDesc +
      " & Years of Experience:" +
      jobExperience +
      " give us 10 interview questions and answers in JSON format. Give me the questions and answers field in JSON format.";

    const result = await model.generateContent(InputPrompt);

    const JsonResponce = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(JsonResponce));
    setLoading(false);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' className='rounded-lg'>
            New Interview
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] '>
          <DialogHeader>
            <DialogTitle>Tell me more about your job </DialogTitle>
            <DialogDescription>
              Add details about the job position, job description and your years
              of experience
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className='mt-2 my-3'>
              <label>Job Position</label>
              <Input
                placeholder='e.g Frontend Developer'
                required
                onChange={(event) => setJobPosition(event.target.value)}
              />
            </div>
            <div className='my-3'>
              <label>Job Description</label>
              <Textarea onChange={(event) => setJobDesc(event.target.value)} />
            </div>
            <div className='my-3'>
              <label>Years of Experience</label>
              <Input
                placeholder='5'
                type='number'
                max={20}
                min={0}
                required
                onChange={(event) =>
                  setJobExperience(Number(event.target.value))
                }
              />
            </div>
            <DialogFooter>
              <Button
                type='submit'
                className='bg-black hover:bg-black/80'
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LoaderCircle className='animate-spin' />
                    Generating from AI
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewInterview;
