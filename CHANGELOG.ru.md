История изменений
=================

1.0.8
-----

* _Условные коментарии_ учитываются при сравнении всегда, в не зависимости от значения опции **ignoreComments** (подробнее [#4]).
* Изменен _БЭМ-пресет_, значение опции **ignoreComments** стало `true`.

1.0.7
-----

* Обновлены `keywords` в `package.json`.
* Добавлен файл `.npmignore`.

1.0.6
-----

* Исправлен _БЭМ-пресет_, значение опции **ignoreComments** стало `false`.

1.0.5
-----

* Удалены ненужные файлы из `npm`.

1.0.4
-----

* Улучшена токенизация входных данных, для более красивого вывода отличий (подробнее [#3]).

1.0.3
-----

* Улучшена токенизация входных данных и сериализация значений атрибутов (подробнее [#2]).

1.0.2
-----

* Изменен _БЭМ-пресет_. В опцию **ignoreAttributes** добавлены атрибуты `aria-labelledby` и `aria-describedby`.

1.0.1
-----

* Исправлена ошибка в опции `compareAttributesAsJSON`, возникающая при некоректных входных данных (подробнее [#1]).

1.0.0
-----

 * Добавлены опции:
  * **ignoreEndTags**
  * **ignoreDuplicateAttributes**
 * Переименованы опции:
  * **ignoreHtmlAttrs** --> **ignoreAttributes**
  * **compareHtmlAttrsAsJSON** --> **compareAttributesAsJSON**
  * **ignoreHtmlComments** --> **ignoreComments**
 * Изменен способ задания атрибутов у опции **compareAttributesAsJSON**.
 * Изменен способ задания опций для [БЭМ](http://ru.bem.info/).
 * Переименован метод **log** в **logDiffText**.
 * Переход на использование парсера [parse5](https://github.com/inikulin/parse5).
 * Добавлено больше тестов.
 * Исправлены баги.

0.5.0
-----

 * Добавлена опция **ignoreHtmlComments**.
 * Добавлена [русская документация](https://github.com/bem/html-differ/blob/master/README.ru.md).
 * Опция **ignoreWhitespace** переименована в **ignoreWhitespaces**.
 * Значение опции **charsAroundDiff** по умолчанию теперь равно `40`.
 * Удалена опция **verbose**.
 * Вывод отличий теперь похож на тот, который использует [mocha](https://github.com/visionmedia/mocha).
 * Переход на использование парсера [htmlparser2](https://github.com/fb55/htmlparser2).

0.4.0
-----

 * Добавлена обработка **onclick** и **ondblclick** атрибутов для опции **compareHtmlAttrsAsJSON**.
 * Добавлен [БЭМ](http://ru.bem.info/)-пресет.
 * Добавлен метод **getDiffText** в **logger**.
 * Добавлено тестирование покрытия кода и статуса зависимостей.
 * Добавлены JSDocs.

[#1]: https://github.com/bem/html-differ/issues/106
[#2]: https://github.com/bem/html-differ/pull/110
[#3]: https://github.com/bem/html-differ/pull/111
[#4]: https://github.com/bem/html-differ/issues/116
