import "./styles.css";

import { Observable, Subscriber } from "rxjs";
import { filter } from "rxjs/operators";

function getMagicNumbers(): Observable<number> {
  return new Observable<number>((subscriber: Subscriber<number>) => {
    for (let i: number = 1; i <= 1000; i++) {
      if (i % 3 === 0 || i % 7 === 0) subscriber.next(i);
      if (i === 1000) subscriber.complete();
    }
  });
}
const res: Array<number> = [];
getMagicNumbers()
  .pipe(filter((num: number) => num % 21 !== 0))
  .subscribe((num: number) => {
    res.push(num);
  });

console.log(res);

// getMagicNumbers().then((res: Array<number>) => {
//   console.log(res) ber.com
// });
