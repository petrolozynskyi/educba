import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FormsModule, ReactiveFormsModule], // Import the form component and necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Note: styleUrls, not styleUrl
})
export class AppComponent {
  title = 'angular';
}
