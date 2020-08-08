import { MatchReader } from './MatchReader';
import { ReportBuilder } from './ReportBuilder';

const matchReader = MatchReader.fromCsv('football.csv');
const report = ReportBuilder.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
report.buildAndPrintReport(matchReader.matches);