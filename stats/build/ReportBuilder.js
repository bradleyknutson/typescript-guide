"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportBuilder = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var ReportBuilder = /** @class */ (function () {
    function ReportBuilder(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    ReportBuilder.winsAnalysisWithHtmlReport = function (teamName) {
        return new ReportBuilder(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    };
    ReportBuilder.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return ReportBuilder;
}());
exports.ReportBuilder = ReportBuilder;
