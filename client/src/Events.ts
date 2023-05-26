import { z } from "zod";

export const participant = z.object({
  handle: z.string(),
  character: z.number(),
});

export const talked = z.object({
  handle: z.string(),
  message: z.string(),
  type: z.literal("Talked"),
});

export const pickedUpStick = z.object({
  handle: z.string(),
  type: z.literal("PickedUpStick"),
});

export const stickAvailable = z.object({
  type: z.literal("StickAvailable"),
});

export const joined = z.object({
  handle: participant,
  type: z.literal("Joined"),
});

export const existingMembers = z.object({
  handles: z.array(participant),
  type: z.literal("ExistingMembers"),
});

export const left = z.object({
  handle: z.string(),
  type: z.literal("Left"),
});

export const events = z.union([
  pickedUpStick,
  talked,
  stickAvailable,
  joined,
  existingMembers,
  left,
]);
