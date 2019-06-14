import csv
import re

ficheiro_read = "dados4py.csv"
ficheiro_write = "dados4json.csv"

lista = ['dCi', 'HDi', 'TDI']


with open(ficheiro_write, mode='w') as file_writer:
    writer = csv.writer(file_writer, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    with open(ficheiro_read) as csv_file:
        texto = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in texto:
            if line_count == 0:
            #Escrever as colunas
                writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],'Combustivel'])
                line_count += 1
            else:
                line_count += 1
                verificar = row[2]
                if 'dCi' in verificar:
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],'gasoleo'])
                elif 'HDi' in verificar:
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],'gasoleo'])
                elif 'TDI' in verificar:
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],'gasoleo'])
                else:
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],'gasolina'])

