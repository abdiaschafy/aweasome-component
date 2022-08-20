import { Pipe, PipeTransform } from "@angular/core";
import { Username } from "src/app/core/models/username.model";

@Pipe({
  name: 'username'
})

export class UsernamePipe implements PipeTransform {
  transform(value: Username): string {
    return `${value.lastName.toUpperCase} ${value.firstName.toUpperCase}`
  }
}
