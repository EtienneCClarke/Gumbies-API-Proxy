import { z } from "zod";

export const statsWidgetSchema = z.strictObject({
    color: z.enum(['beige', 'green', 'blue', 'white', 'black', 'grey', 'transparent']).default('beige'),
    withPopup: z.boolean().optional().default(false),
    popupTheme: z.enum(['light', 'dark']).optional().default('light'),
    impactTypes: z.enum(['trees', 'plastic', 'carbon', 'kelp', 'water']).array().optional().default(['trees', 'plastic', 'carbon']),
})