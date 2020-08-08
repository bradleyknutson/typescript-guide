import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class ReportBuilder {
  static winsAnalysisWithHtmlReport(teamName: string): ReportBuilder {
    return new ReportBuilder(
      new WinsAnalysis(teamName),
      new HtmlReport()
    );
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget) { }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}