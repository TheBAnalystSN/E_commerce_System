
# REFLECTION.md

## Reflection

Working on this project helped me understand how TypeScript projects are supposed to be structured, but I ran into a lot of issues along the way. One of the biggest problems I had was getting all of the imports to work correctly. Even when the files were in the right folders, TypeScript kept telling me the modules could not be found. I eventually learned that TypeScript requires the folder names, file names, and imports to match exactly — including casing. Before fixing that, the compiler kept complaining.

Another challenge was dealing with the ambient context errors. At first, I didn’t understand why TypeScript wouldn’t let me define certain constants or implementations inside declaration-style files, but now I know those errors happen when TypeScript thinks you’re writing `.d.ts` style declarations instead of real code.

I also struggled making sure `npm run start` worked without errors. Sometimes the compiled files weren’t showing up because I forgot to rebuild after changes, and other times the imports used `.ts` instead of `.js` which broke the runtime.

If I had more time, I would improve the UI and make it more interactive—maybe add input fields, cart management, or fetch data from an API. But overall, I learned a lot about debugging TypeScript structure, fixing module resolution issues, and staying organized.

I was actually given more time after turning in my assigment and I worked on it some on Thanksgiving and allday Friday and I took bryans advice and fixed some importing and exporting in my files. I also had to delete  the the history folder which was stoping everything from compiling and giving all the errors. Everything is now compiled and tested successfully. Thanks for the extra time.