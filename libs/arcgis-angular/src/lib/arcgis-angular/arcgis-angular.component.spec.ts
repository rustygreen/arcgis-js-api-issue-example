import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcgisAngularComponent } from './arcgis-angular.component';
import { Point } from '@arcgis/core/geometry';

describe('ArcgisAngularComponent', () => {
  let component: ArcgisAngularComponent;
  let fixture: ComponentFixture<ArcgisAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcgisAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcgisAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const point = new Point({ latitude: 42, longitude: -72 });
    expect(component).toBeTruthy();
    expect(point).toBeTruthy();
  });
});
