"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ReportBuilder_1 = require("./ReportBuilder");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var report = ReportBuilder_1.ReportBuilder.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
report.buildAndPrintReport(matchReader.matches);
