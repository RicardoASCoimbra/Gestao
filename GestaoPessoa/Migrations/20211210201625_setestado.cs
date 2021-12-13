using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestaoPessoa.Migrations
{
    public partial class setestado : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "Pessoas",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Estado",
                table: "Pessoas");
        }
    }
}
