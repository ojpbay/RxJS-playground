import { from } from 'rxjs';

const numberSource = from([4,1,7,2,9,10]);

numberSource.subscribe(n => {
    console.log(n);
});


