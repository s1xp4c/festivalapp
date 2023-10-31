"use client";
import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from ":/components/ui/button";
import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ":/components/ui/dialog";

interface FullScreenDialogProps {
  onAccept: () => void;
  onDecline: () => void;
}

function FullScreenDialog({ onAccept, onDecline }: FullScreenDialogProps) {
  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Hej, og velkommen</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={onDecline} variant="secondary" className="">
              Nej tak!
            </Button>
            <Button onClick={onAccept} variant="default" className="">
              Ja klart
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FullScreenDialog;
