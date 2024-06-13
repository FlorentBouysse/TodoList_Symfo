<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240613080658 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE task (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE task_category (task_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_468CF38D8DB60186 (task_id), INDEX IDX_468CF38D12469DE2 (category_id), PRIMARY KEY(task_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE task_todolist (task_id INT NOT NULL, todolist_id INT NOT NULL, INDEX IDX_9D8D1C978DB60186 (task_id), INDEX IDX_9D8D1C97AD16642A (todolist_id), PRIMARY KEY(task_id, todolist_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE todolist (id INT AUTO_INCREMENT NOT NULL, userid_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_DD4DF6DB58E0A285 (userid_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nickname VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE task_category ADD CONSTRAINT FK_468CF38D8DB60186 FOREIGN KEY (task_id) REFERENCES task (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE task_category ADD CONSTRAINT FK_468CF38D12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE task_todolist ADD CONSTRAINT FK_9D8D1C978DB60186 FOREIGN KEY (task_id) REFERENCES task (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE task_todolist ADD CONSTRAINT FK_9D8D1C97AD16642A FOREIGN KEY (todolist_id) REFERENCES todolist (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE todolist ADD CONSTRAINT FK_DD4DF6DB58E0A285 FOREIGN KEY (userid_id) REFERENCES `user` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE task_category DROP FOREIGN KEY FK_468CF38D8DB60186');
        $this->addSql('ALTER TABLE task_category DROP FOREIGN KEY FK_468CF38D12469DE2');
        $this->addSql('ALTER TABLE task_todolist DROP FOREIGN KEY FK_9D8D1C978DB60186');
        $this->addSql('ALTER TABLE task_todolist DROP FOREIGN KEY FK_9D8D1C97AD16642A');
        $this->addSql('ALTER TABLE todolist DROP FOREIGN KEY FK_DD4DF6DB58E0A285');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE task');
        $this->addSql('DROP TABLE task_category');
        $this->addSql('DROP TABLE task_todolist');
        $this->addSql('DROP TABLE todolist');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
