import {select, Selection, BaseType} from 'd3-selection';
import {max} from 'd3-array';

select("body").append("div").text(`Hello, world! ${max([1, 2, 3, 4])}`);