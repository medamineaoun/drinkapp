import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailSearchComponent } from './cocktail-search.component';

describe('CocktailSearchComponent', () => {
  let component: CocktailSearchComponent;
  let fixture: ComponentFixture<CocktailSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
