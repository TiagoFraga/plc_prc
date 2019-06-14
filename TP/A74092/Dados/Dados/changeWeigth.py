import csv
import re

ficheiro_read = "dados4weightTreatment.csv"
ficheiro_write = "dados4code.csv"


with open(ficheiro_write, mode='w') as file_writer:
    writer = csv.writer(file_writer, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    with open(ficheiro_read) as csv_file:
        texto = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in texto:
            if line_count == 0:
            #Escrever as colunas
                writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[20],row[21]])
                line_count += 1
            else:
                line_count += 1
                verificar5p = row[20]
                verificar3p = row[21]
                if verificar3p != str(0):
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[21],row[20]])
                elif verificar3p == str(0):
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[20],row[21]]) 
                    

