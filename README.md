# chronos-timer

<p align="center">
  <img src="assets/chronos-god.jpg">
</p>

### Accurate and easy to use timer / countdown



#### Installation

`npm i chronos timer`


#### Usage

##### Class: `Chronos`

`new Chronos([millisecons])`
* `milliseconds` <span style="color: forestgreen"> <*number*> </span> Countdown time, if not provided it will behave like a stopwatch.

##### Instance methods

* `chronos.start()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.pause()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.reset()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.getCount()` <span style="color: forestgreen"> <*Observable*><*number*>>  </span> Milliseconds elapsed since `chronos.start()`, emits **-1** when countdown complete.
* `chronos.getCountSync()` <span style="color: forestgreen"> <*number*> </span> Milliseconds elapsed since `chronos.start()`.


