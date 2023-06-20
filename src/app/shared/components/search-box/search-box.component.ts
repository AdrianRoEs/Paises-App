import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{

  private debaunce: Subject< string> = new Subject<string>()

  constructor() { }



@Input()
public placeholder : string='';


@Input()
public initialValue : string='';


@Output()
public OnValue= new EventEmitter<string>()

@Output()
public OnDibaunce= new EventEmitter<string>()


ngOnInit(): void {
    this.debaunce
    .pipe(
      debounceTime(300)
    )
    .subscribe( value =>{
    this.OnDibaunce.emit( value )
    
      })
      
}

emitValue(value: string): void{
  this.OnValue.emit(value);
}

 onkeyPress(searchTerm: string){
   this.debaunce.next(searchTerm);
 }

}
