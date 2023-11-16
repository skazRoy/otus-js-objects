/**
 * Функция вычисляет сумму баллов по успеваемости студентов.
 *
 * @param {Object} arr - Объект, содержащий успеваемость студентов.
 * @returns {number} - Сумма всех баллов.
 *
 * @example
 * const grades = {
 *   alice: 85,
 *   bob: 92,
 *   charlie: 78,
 * };
 * const totalScore = getScore(grades);
 * console.log(totalScore); // Выведет: 255
 */
export default function getScore(arr) {
  // Реализация функции
  const scores = Object.values(arr);
  return scores.reduce((acc, score) => acc + score, 0);
}

