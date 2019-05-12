import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'timeFrom',
        value: '23 апр 2019',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'timeTo',
        value: '23 апр 2019',
        required: true,
        order: 1
      }),

      new DropdownQuestion({
        key: 'guests',
        options: [
          {key: 'john',  value: 'John Doe'},
          {key: 'john1',  value: 'John Snow'},
          {key: 'john2',   value: 'John Travolta'},
          {key: 'john3', value: 'Johanna Jett'}
        ],
        placeholder: "Добавить гостей",
        order: 3
      }),

      new TextboxQuestion({
        key: 'place',
        placeholder: "Укажите место проведения",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'place',
        placeholder: "Добавить видеоконференцию",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'place',
        placeholder: "Добавить описание",
        required: true,
        order: 1
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
