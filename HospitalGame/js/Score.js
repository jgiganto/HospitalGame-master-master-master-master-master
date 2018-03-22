var score = 0;
function SumarScore() {
    score += 100;
    return score.toString();
}
function RestaScore() {
    if (score >= 20) {
        score -= 20;
    }
    return score.toString();
}