import { effect, signal } from "../src/index";

const s = signal(0); // notice property change
const fn = () => s.value;

effect(fn);

s.value = 1;
