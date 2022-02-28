# chronos-timer

<p align="center">
  <img src="https://cdna.artstation.com/p/assets/images/images/011/647/886/large/joseph-maureira-chronos-by-cicros-dcg5olz.jpg?1616533747">
</p>

### Accurate and easy to use timer / countdown



#### Installation

`npm i chronos-timer`


#### Usage

##### Class: `Chronos`

`new Chronos([millisecons])`
* `milliseconds` <span style="color: forestgreen"> <*number*> </span> Countdown time, if not provided it will behave like a stopwatch.

##### Instance methods

* `chronos.start()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.pause()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.reset()` <span style="color: forestgreen"> <*void*> </span>
* `chronos.getCents()` <span style="color: forestgreen"> <*Observable*<*number*>>  </span> Centiseconds elapsed since `chronos.start()`, emits **-1** when countdown complete.
* `chronos.getCentsSync()` <span style="color: forestgreen"> <*number*> </span> Centiseconds elapsed since `chronos.start()`.


