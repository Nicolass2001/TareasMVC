using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TareasMVC.Migrations
{
    /// <inheritdoc />
    public partial class AdminRol : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"if not exists(select id from AspNetRoles where Id = 'd655635d-d812-495a-909a-547e23331c85')
                begin
	                insert AspNetRoles (Id, [NormalizedName], [Name])
	                values ('d655635d-d812-495a-909a-547e23331c85', 'ADMIN', 'admin')
                end");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("delete AspNetRoles where Id = 'd655635d-d812-495a-909a-547e23331c85'");
        }
    }
}
