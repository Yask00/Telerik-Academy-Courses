using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.FillTheMatrix
{
    class Program
    {
        static void Main()
        {

            int n = int.Parse(Console.ReadLine());
            string secondLine = Console.ReadLine();

            int[,] matrix = new int[n, n];
            int digit = 1;
            //======================================================================================
            switch (secondLine)
            {
                case "a":
                    //Filling the matrix
                    for (int col = 0; col < n; col++)       
                    {
                        for (int row = 0; row < n; row++)
                        {
                            matrix[col, row] = digit;
                            digit++;
                        }
                    }
                    //Printing
                    for (int col = 0; col < n; col++)           
                    {
                        for (int row = 0; row < n; row++)
                        {
                            if (row == n - 1)
                            {
                                Console.Write("{0}", matrix[row, col]);
                            }
                            else
                            {
                                Console.Write("{0} ", matrix[row, col]);
                            }
                            
                        }
                        Console.WriteLine();
                    }
                    digit = 1;
                    
                    ; break;
                //-----------------------------------------------------------
                case "b":
                    //Filling the matrix
                    for (int col = 0; col < n; col++)      
                    {
                        if (col % 2 == 0)
                        {
                            for (int row = 0; row < n; row++)
                            {
                                matrix[col, row] = digit;
                                digit++;
                            }
                        }
                        else
                        {
                            for (int row = n - 1; row >= 0; row--)
                            {
                                matrix[col, row] = digit;
                                digit++;
                            }
                        }
                    }
                    //Printing
                    for (int col = 0; col < n; col++)           
                    {
                        for (int row = 0; row < n; row++)
                        {
                            if (row == n - 1)
                            {
                                Console.Write("{0}", matrix[row, col]);
                            }
                            else
                            {
                                Console.Write("{0} ", matrix[row, col]);
                            }
                            
                        }
                        Console.WriteLine();
                    }
                    digit = 1;
                    ; break;
                //-----------------------------------------------------------
                case "c":
                    int Row = n - 1;
                    int Col = 0;
                    int startRow = n - 1;
                    int startCol = 0;

                    //Filling matrix
                    while (digit < n * n)
                    {
                        if (Row == (n - 1) && Col < (n - 1))       
                        {
                            if (digit == 1)
                            {
                                matrix[Col, Row] = digit;
                            }
                            startRow--;
                            startCol = 0;
                            Row = startRow;
                            Col = startCol;
                            digit++;
                            matrix[Col, Row] = digit;

                            while (Row < (n - 1) && Col < (n - 1))
                            {
                                Row++;
                                Col++;
                                digit++;
                                matrix[Col, Row] = digit;
                            }
                        }
                        if (Row <= (n - 1) && Col == (n - 1))
                        {
                            startRow = 0;
                            startCol++;
                            Row = startRow;
                            Col = startCol;
                            digit++;
                            matrix[Col, Row] = digit;

                            while (Col < (n - 1))
                            {
                                Col++;
                                Row++;
                                digit++;
                                matrix[Col, Row] = digit;
                            }
                        }
                    }
                    //Printing
                    for (int c = 0; c < n; c++)           
                    {
                        for (int r = 0; r < n; r++)
                        {
                            if (r == n -1)
                            {
                                Console.Write("{0}", matrix[r, c]);
                            }
                            else
                            {
                                Console.Write("{0} ", matrix[r, c]);
                            }
                            
                        }
                        Console.WriteLine();
                    }
                    digit = 1;
                    
                    ;break;
                //-----------------------------------------------------------
                case "d":
                    int offset = 0;
                    int ROW = 0;
                    int COL = 0;
                    while (digit <= n * n)            //Filling matrix
                    {
                        for (ROW = offset; ROW < n - offset; ROW++)
                        {
                            COL = offset;
                            matrix[ROW, COL] = digit;
                            digit++;
                        }
                        for (COL = 1 + offset; COL < n - offset; COL++)
                        {
                            ROW = n - 1 - offset;
                            matrix[ROW, COL] = digit;
                            digit++;
                        }
                        for (ROW = n - 2 - offset; ROW >= offset; ROW--)
                        {
                            COL = n - 1 - offset;
                            matrix[ROW, COL] = digit;
                            digit++;
                        }
                        for (COL = n - 2 - offset; COL >= offset + 1; COL--)
                        {
                            ROW = offset;
                            matrix[ROW, COL] = digit;
                            digit++;
                        }
                        offset++;
                    }
                    //Printing
                    for (int irow = 0; irow < n; irow++)          
                    {
                        for (int column = 0; column < n; column++)
                        {
                            if (column == n - 1)
                            {
                                Console.Write("{0}", matrix[irow, column]);
                            }
                            else
                            {
                                Console.Write("{0} ", matrix[irow, column]);
                            }
                            
                        }
                        Console.WriteLine();
                    }
                    
                    ; break;
                //-----------------------------------------------------------
                default: Console.WriteLine("No such symbol"); break;
            }
            //=====================================================================================

            
        }
    }
}
