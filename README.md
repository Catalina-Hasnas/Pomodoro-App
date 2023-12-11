# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G), using React with Recoil.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts
- Be sent a browser notification and a beeping sound when the timer finishes

### Screenshot

![Desktop-app](/src/assets/screenshots/screenshot.png)
![Mobile-app](/src/assets/screenshots/mobile.png)
![Settings](/src/assets/screenshots/settings.png)

### Links

- Live Site URL: [Add live site URL here](https://catalina-hasnas.github.io/Pomodoro-App/)

## My process

### Built with

- React
- Recoil
- SASS
- Container queries and CSS clamp

### What I learned

#### 1. Usage of container queries and clamp;

Making the settings dialog into a container and having media queries based on the `container size` instead of the screen size proved to be efficient. So is using `clamp` to have the dialog width adjust based on the viewport width with a min and a max width according to the figma designs.

```css
dialog {
  container-type: inline-size;
  container-name: dialog;
  width: clamp(20.4375rem, 40vw, 33.75rem);
  ...;
}

@container dialog (min-width: 30rem) {
  .numeric-inputs-container {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.3rem;
  }
}
```

#### 2. Usage of Recoil for state management

I enjoyed learning `Recoil` for this challenge, which I found to be intuitive. One feature I found particularly useful is the `selector` method, which permorms operations on the state and returns a new value from the said state.
In my case, I used it to get the number of seconds of the active tab, without the need to know what the active tab even is.

```ts
export const activeTabSecondsSelector = selector({
  key: "activeTabSeconds",
  get: ({ get }) => {
    const activeTab = get(activeTabAtom);
    const pomodoroSeconds = get(pomodoroSecondsAtom);
    const shortBreakSeconds = get(shortBreakSecondsAtom);
    const longBreakSeconds = get(longBreakSecondsAtom);

    const tabsNameSeconds = {
      pomodoro: pomodoroSeconds,
      "short break": shortBreakSeconds,
      "long break": longBreakSeconds,
    };

    return tabsNameSeconds[activeTab];
  },
});
```

3. Animating the `stroke-dashoffset` CSS property on svg circle.

Changed the value of stroke-dashoffset depending on the percent we get when calculating the _time that has passed_ over how much _time it is in total_. Then, it can be easily animated.

```js
    const strokeDashOffsetBar = ((100 - percent) / 100) * dashArr;

    <circle
        id="bar"
        r={radius}
        cx={xy}
        cy={xy}
        fill="transparent"
        strokeDasharray={dashArr}
        strokeDashoffset="0"
        style={{ strokeDashoffset: `-${strokeDashOffsetBar}px` }}
    >
```

```css
#svg #circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: var(--accent-color);
  stroke-width: 0.2rem;
  stroke-linecap: round;
}
```

4. Requesting permission and sending `browser` and audio `notifications` on timer end.

Initially I made the request to send notifications on page load, but I found out that this is an issue when running the app through _Lighthouse_. It makes sense, you wouldn't want to be promting to accept notifications from a site you've just opened the first time. So I moved the code to request permission on click on "START" button when you first start a timer. Seems like a much better user experience. I set the audio to play and the notification to be sent in my function that I know will execute each second and I have the most recent version of the seconds state.

```js
const handleClick = () => {
    ...
    Notification.requestPermission();
    ...
    const newIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          audio.play();
          new Notification("Time's up!");
        }
        return prevSeconds > 0 ? prevSeconds - 1 : 0;
      });
    }, 1000);
}
```

### Continued development

Future plans are to improve the Timer Component and export it as a small library.

### Useful resources

- [Animating the stroke-dashoffset property](https://javascript.plainenglish.io/how-to-animate-svg-circle-with-javascript-8e8c720ee3a2) - I couldn't find the exact article that I used to learn about the `stroke-dashoffset` and `stroke-dasharray` properties, but this is a good one as well.
- [Kevin's Plowell video on css clamp](https://www.youtube.com/watch?v=U9VF-4euyRo) - I finally understood clamp after watching this video.

## Author

- Frontend Mentor - [@Catalina-Hasnas](https://www.frontendmentor.io/profile/Catalina-Hasnas)
- LinkedIn - [Catalina Hasnas](https://www.linkedin.com/in/catalina-hasnas-7481731b8/)
