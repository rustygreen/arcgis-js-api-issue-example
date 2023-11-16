import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rz-arcgis-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arcgis-angular.component.html',
  styleUrls: ['./arcgis-angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcgisAngularComponent {}
