"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const NewInterview = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <div className='p-10 border rounded-xl hover:scale-105 hover:shadow-md cursor-pointer bg-secondary transition-all' onClick={() => setOpen(true)}>
            <h2 className='font-bold text-lg'>+ Add New</h2>
        </div>
        <Dialog open={open}>
  <DialogContent className='bg-white'>
    <DialogHeader>
      <DialogTitle>Tell us more about your Job Interview</DialogTitle>
      <DialogDescription>
        <div>
          <h2>Add details about the job position</h2>
          <div>
            <label>Job Position</label>
            <Input placeholder="Frontend Developer"/>
          </div>
        </div>
      <div className='flex gap-5 justify-end'>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Start Interview</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
    
  )
};

export default NewInterview