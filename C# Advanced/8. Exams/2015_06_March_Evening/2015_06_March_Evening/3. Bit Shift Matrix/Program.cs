using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _3.Bit_Shift_Matrix
{
    class Program
    {
        static int rows;
        static int cols;
        static int[] moves;
        static BigInteger[,] field;

        static void Main(string[] args)
        {
            rows = int.Parse(Console.ReadLine());
            cols = int.Parse(Console.ReadLine());
            int movesCount = int.Parse(Console.ReadLine());
            moves = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            field = new BigInteger[rows, cols];

            FillMatrix();


            BigInteger sum = 0;
            int[] pos = { rows - 1, 0 }; //starting postition 4 0
            int coef = rows > cols ? rows : cols;

            sum += field[pos[0], pos[1]];
            field[pos[0], pos[1]] = 0; ////clear the cell

            foreach (var code in moves)
            {
                int[] tarPos = { code / coef, code % coef };

                int stepRow = pos[0] == tarPos[0] ? 0 : pos[0] < tarPos[0] ? 1 : -1;
                int stepCol = pos[1] == tarPos[1] ? 0 : pos[1] < tarPos[1] ? 1 : -1;

                do
                {
                    pos[1] += stepCol;
                    sum += field[pos[0], pos[1]];
                    field[pos[0], pos[1]] = 0; ////clear the cell

                }
                while (pos[1] != tarPos[1] && pos[1] >= 0 && pos[1] < cols);

                do
                {
                    pos[0] += stepRow;
                    sum += field[pos[0], pos[1]];
                    field[pos[0], pos[1]] = 0; ////clear the cell

                }
                while (pos[0] != tarPos[0] && pos[0] >= 0 && pos[0] < rows);
            }

            Console.WriteLine(sum);
        }

        private static void FillMatrix()
        {
            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    field[r, c] = (BigInteger)(1) << (rows - 1 - r + c);
                }
            }
        }


        static void PrintMatrix(BigInteger[,] board)
        {
            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    Console.Write(board[r, c] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
