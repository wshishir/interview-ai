import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const NewInterview = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <div className='p-10 border rounded-xl hover:scale-105 hover:shadow-md cursor-pointer bg-secondary transition-all' onClick={() => setOpen(true)}>
            <h2 className='font-bold text-lg'>+ Add New</h2>
        </div>
        <Dialog open={open}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
    
  )
}

export default NewInterview