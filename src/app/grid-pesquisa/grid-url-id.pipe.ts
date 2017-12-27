import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'gridUrlId'
})
export class GridUrlIdPipe implements PipeTransform{

    transform(url: string):string {
        if(url.length === 0){
            return null;
        }
        let id: string = url.match('[0-9]+')[0];
        return id;
    }

}