// let now = new Date(24 * 3600 * 1000);

// console.log(now);

// let date = new Date("2017-01-26");
// console.log(date);

// new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// new Date(2011, 0, 1); // the same, hours etc are 0 by default

// let date = new Date();
// console.log(date.getTimezoneOffset()); // 1.01.2011, 02:03:04.567

// let today = new Date();

// today.setHours(0);
// console.log(today); // still today, but the hour is changed to 0

// today.setHours(0, 0, 0, 0);
// console.log(today); // still today, now 00:00:00 sharp.

// let today = new Date();

// today.setHours(0);
// console.log(today); // still today, but the hour is changed to 0

// today.setHours(0, 0);
// console.log(today); // still today, now 00:00:00 sharp.

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date); // ...is 1st Feb 2013!

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 3456);

// console.log(date); // 1 Mar 2016

// let date = new Date();
// console.log(date);
// date.setSeconds(date.getSeconds() + 70);
// console.log(date); // shows the correct date

// let date = new Date(2016, 0, 2); // 2 Jan 2016

// date.setDate(1); // set day 1 of month
// console.log(date);

// date.setDate(0); // min day is 1, so the last day of the previous month is assumed
// console.log(date); // 31 Dec 2015

// let date = new Date();
// console.log(+date); // the number of milliseconds, same as date.getTime()

// let start = new Date();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i * i * i * i;
// }
// let end = new Date();
// console.log(`The loop took ${end - start} ms`);

// let vaqt = new Date();
// console.log(vaqt.toUTCString());
