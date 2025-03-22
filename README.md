# Musical Ear - An Interval Trainer

This simple interval trainer was created for the DEV Community Kendo React challenge.

## The Kendo React free components that I used

1. StackLayout
2. Checkbox
3. Label
4. Button
5. RadioInput
6. Floating Action Button
7. Notification Group
8. Notification
9. Fade
10. Slide
11. Push
12. Card
13. SvgIcon

I will continue using Kendo React's free components in future projects. Thank you Kendo React!

## Workflow

I wrote this React application in TypeScript and hosted it using Netlify. I used all vanilla CSS for the styles. For state management, I passed some state as props and where it got a bit complicated across components, I relied on React's Context API. The audio files used as intervals are hosted on an AWS S3 bucket. I created the short .wav files using MuseScore. User stats as you test are saved to local storage in the browser.

## How it works

This trainer quizzes users on musical interval identification. Click the play button to hear a musical interval. Identify the interval you heard by using the radio buttons and submit button and then a new interval will be selected. Play and pause the short audio snippet as many times as you'd like before attempting to identify the interval. At least one interval must be selected from the radio inputs or else an error notification will show when you try to submit your answer.

After playing and submitting an answer to the first interval, the dashboard will change to show the total number of intervals attempted and the number answered correctly. The running totals will update as you continue submitting answers to test your ear! This data is saved to your browser's localStorage so if you close the app and reopen it, your progress, along with the average you have answered correctly, will persist. If you'd like to reset your stats, you can click the Reset button at any time.

If you are ever stuck and cannot identify an interval after clicking the play button, you can click the Show Answer button in the bottom right and a notification will appear at the top of the dashboard telling you what interval you just heard. Once this notification appears you can continue playing the interval's audio file so you can commit it to memory. If you click the Show Answer button, you may not submit an answer for that interval - the radio buttons and submit button will be disabled and grayed out. Upon closing the notification that displayed the answer, a new interval will be selected for you to play.

I wanted this application to be friendly to beginners so instead of being quizzed on all intervals in all directions (which is the default behavior of the app), you can customize which intervals you are tested on.

If you click the Show Options button in the bottom left, a menu will appear at the bottom of the interface so that you can select intervals as well as directions that you feel comfortable identifying. If you're brand new to musical intervals but curious to try, isolate one interval and one direction at a time to practice recognizing it before adding more. I suggest including more directions before including more intervals.

At least one interval and one direction must be selected; if not, an error notification will show after you click the Apply Changes button at the bottom of the form and your changes will not be applied. If changes are applied, a green notification should appear at the top of the options form. Since there are many intervals to choose from and all of them are checked by default, there is an Unselect All button for your convenience so you can select one or two intervals to start. If all of the intervals are unselected, the button's text and functionality will change to Select All of them again so there is never a need to click every single interval. This change in the button's behavior will take effect whether you toggle Unselect All/Select All or manually unselect/select each checkbox.

After applying these customizations to how you are tested, any intervals that are not included for testing will be grayed out in the selection area, and their radio inputs disabled to avoid accidentally selecting an interval not included in the testing pool.

### A "note" on Intervals :)

Musical intervals can be played three different ways, or directions:

1. ascending - a lower note followed by a higher note

2. descending - a higher note followed by a lower note

3. composite - both notes played simultaneously

All three directions are important for musicians to practice identifying by ear. However, the directions you are tested on can be manually configured by you when you click the Show Options button. By default, all three directions are selected but as noted above, this can be customized by the user.

This application includes 13 different intervals, located between a Perfect Unison and a Perfect Octave. They are:

1. Perfect Unison (Unison) - two notes played 0 semitones (or half steps) apart from each other

2. minor 2nd (min2) - two notes played 1 semitone apart

3. Major 2nd (Maj2) - two notes played 2 semitones apart

4. minor 3rd (min3) - two notes played 3 semitones apart

5. Major 3rd (Maj3) - two notes played 4 semitones apart

6. Perfect 4th (P4) - two notes played 5 semitones apart

7. Tritone - two notes played 6 semitones apart

8. Perfect 5th (P5) - two notes played 7 semitones apart

9. minor 6th (min6) - two notes played 8 semitones apart

10. Major 6th (Maj6) - two notes played 9 semitones apart

11. minor 7th (min7) - two notes played 10 semitones apart

12. Major 7th (Maj7) - two notes played 11 semitones apart

13. Perfect Octave (Octave) - two notes played 12 semitones apart

Here is a helpful [YouTube video](https://www.youtube.com/watch?v=dXg8eCHNaTE) I found that helps to explain how intervals work.

## Responsive Design

I attempted to make this user interface responsive to different screen sizes by using relative units in CSS and writing media queries when needed to restyle components at different breakpoints.

## Accessibility Concerns

In addition to the accessibility concerns addressed by Kendo React's free components, I used semantic markup (main and section tags) and wrapped all radio and checkbox inputs in fieldset elements. Accessibility is an area where I am still growing and I have plenty to learn! As I develop this app further, I will keep accessibility in mind as I want my project to be inclusive to all.
