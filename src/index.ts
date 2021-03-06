import { BehaviorSubject, interval, NEVER, Observable, Subscription } from "rxjs";
import { map, share, switchMap } from "rxjs/operators";

export class Chronos {

  private _cents$ = new BehaviorSubject(-1)
  private _pauser$ = new BehaviorSubject(true)
  private _subscription: Subscription

  private _milliseconds: number = 0

  //#region IMPURE

  /**
   *
   * @param milliseconds Timer duration, will emits -1 when completed
   */
  constructor(milliseconds?: number) {
    this._milliseconds = milliseconds
    this.startSubscription()
  }

  private startSubscription(): void {
    let engine$ = this.timerEngine(this._pauser$)
    this._subscription = engine$.subscribe({
      next: millis => {
        const cents = Math.round(millis / 10)
        this._cents$.next(cents)
        if (millis >= this._milliseconds) {
          this.pause()
          this._cents$.next(-1)
        }
      },
      error: err => {
        throw new Error(err)
      }
    })
  }

  //#endregion

  //#region PURE FUNCTIONS

  private timerEngine(pauser$: Observable<boolean>): Observable<number> {

    let cnt = 0
    let oldCnt = 0
    let startTime = 0

    const refreshTime = 10
    const source$ = interval(refreshTime)

    const obs$ = pauser$.pipe(
      switchMap((paused: boolean) => {
        if (paused) {
          return NEVER
        } else {
          return source$.pipe(
            map((value, index) => {
              if (index) {
                let diff = Date.now() - startTime
                cnt = oldCnt + diff
              }
              else {
                oldCnt = cnt
                startTime = Date.now()
              }
              return cnt
            })
          )
        }
      })
    )

    return obs$
  }

  //#endregion



  //#region PUBLIC API

  start(): void {
    this._pauser$.next(false)
  }

  reset(): void {
    this._subscription.unsubscribe()
    this._cents$.next(0)
    this.startSubscription()
  }

  pause(): void {
    this._pauser$.next(true)
  }

  getCents(): Observable<number> {
    return this._cents$.asObservable().pipe(share())
  }

  getCentsSync(): number {
    return this._cents$.getValue()
  }

  //#endregion

}
