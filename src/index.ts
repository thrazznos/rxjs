import { Observable } from "rxjs";

let observable$ = new Observable((subscriber) => {
    subscriber.next("Hello world")
    subscriber.complete();
    subscriber.error();

    return () => {
        console.log("unsubscribe")
    }
})

const observer = {
    next: (value: any) => {
        console.log(value);
    },
    complete: () => {
        console.log("complete called")
    },
    error: (err: any) => {
        console.error("shits broke")
    }
}

const observable = observable$.subscribe(observer);

observable.unsubscribe();