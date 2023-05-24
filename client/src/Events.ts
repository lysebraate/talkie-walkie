import { z } from "zod";

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

export const events = z.union([pickedUpStick, talked, stickAvailable]);
